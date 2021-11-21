import * as yup from "yup";

const NAME_REGEX = /^[a-zA-Z "'-]*$/

export const validations = {
  formName: yup.string().min(2, 'Form Name is too short').max(255, 'Form Name is too long').matches(NAME_REGEX, 'Please enter a valid form name'),
  commonRequired: yup.string().required("Required field cannot be left blank"),
  
}