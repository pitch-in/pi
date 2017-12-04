import {
  FormGroup,
  FormArray,
  AbstractControl,
  FormBuilder
} from '@angular/forms';

import { mapObjIndexed, curry } from 'ramda';

export interface ArraySchema<T extends any[]> {
  type: 'array';
  schema: FormSchema<T[0]>;
  extras?: any;
}

export interface GroupSchema<T extends Object> {
  type: 'group';
  schema: FormSchema<T>;
  extras?: any;
}

export type FieldSchema = any[];

export type ControlSchema<T> = ArraySchema<any> | GroupSchema<T> | FieldSchema;

export type FormSchema<T> = { [U in keyof Partial<T>]: ControlSchema<T[U]> };

export const formArray = curry(
  (arrayName: string, form: FormGroup): FormArray =>
    form.get(arrayName) as FormArray
);

const isArraySchema = (
  controlSchema: ControlSchema<any>
): controlSchema is ArraySchema<any> =>
  (<ArraySchema<any>>controlSchema).type === 'array';

const isGroupSchema = (
  controlSchema: ControlSchema<any>
): controlSchema is GroupSchema<any> =>
  (<GroupSchema<any>>controlSchema).type === 'group';

const isControlSchema = (
  controlSchema: ControlSchema<any>
): controlSchema is FieldSchema =>
  !(isArraySchema(controlSchema) || !isGroupSchema(controlSchema));

// function buildControl<T extends any[]>(
//   fb: FormBuilder,
//   schema: ArraySchema<T>,
//   data: T
// ): FormArray;
// function buildControl<T extends Object>(
//   fb: FormBuilder,
//   schema: GroupSchema<T>,
//   data: T
// ): FormGroup;
// function buildControl<T>(fb: FormBuilder, schema: FieldSchema, data: T): any;
function buildControl<T>(
  fb: FormBuilder,
  schema: ControlSchema<T>,
  data: T
): AbstractControl | any {
  if (isControlSchema(schema)) {
    return schema;
  } else if (isArraySchema(schema) && Array.isArray(data)) {
    return fb.array(data.map(curry(buildForm)(fb, schema.schema)));
  } else if (isGroupSchema(schema)) {
    return buildForm(fb, schema.schema, data);
  }
}

export const buildForm = <T extends any>(
  fb: FormBuilder,
  schema: FormSchema<T>,
  data: T
): FormGroup => {
  const formOptions = mapObjIndexed(
    (controlSchema, key) =>
      buildControl(fb, controlSchema as any, data[key] as any),
    schema
  );

  const formGroup = fb.group(formOptions);
  formGroup.setValue(data);
  return formGroup;
};
