import * as Yup from 'yup';

const smsValidation = Yup.object({
  phoneNumber: Yup.string.length(13, 'must be 6 numbers no more no less'),
  password: Yup.string.required(),
});
export default smsValidation;
