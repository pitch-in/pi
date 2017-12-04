import { FormBuilder } from '@angular/forms';
import { buildForm, FormSchema } from './form.helpers';

interface BasicData {
  id: number;
  name: string;
}

interface ArrayData {
  description: string;
  bascis: BasicData[];
}

interface GroupData {
  count: number;
  basic: BasicData;
}

const basicSchema: FormSchema<BasicData> = {
  id: [''],
  name: ['']
};

const arraySchema: FormSchema<ArrayData> = {
  description: [''],
  bascis: {
    type: 'array',
    schema: basicSchema
  }
};

const groupSchema: FormSchema<GroupData> = {
  count: [''],
  basic: {
    type: 'group',
    schema: basicSchema
  }
};

describe('form.helpers', () => {
  describe('buildForm', () => {
    let fb: FormBuilder;

    beforeEach(() => {
      fb = new FormBuilder();
    });

    it('builds a basic form', () => {
      const data: BasicData = {
        id: 1,
        name: 'Bob'
      };

      expect(buildForm(fb, basicSchema, data).value).toEqual(data);
    });

    it('builds a form with an array', () => {
      const data: ArrayData = {
        description: 'Some arrays',
        bascis: [{ id: 1, name: 'one' }, { id: 2, name: 'two' }]
      };

      expect(buildForm(fb, arraySchema, data).value).toEqual(data);
    });

    it('builds a form with a group', () => {
      const data: GroupData = {
        count: 2,
        basic: { id: 1, name: 'one' }
      };

      expect(buildForm(fb, groupSchema, data).value).toEqual(data);
    });
  });
});
