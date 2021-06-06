import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fname: yup.string().required('Không được bỏ trống'),
  lname: yup.string().required('Không được bỏ trống'),
  number: yup.string().required('Không được bỏ trống'),
  city: yup.string().required('Không được bỏ trống'),
  district: yup.string().required('Không được bỏ trống'),
  ward: yup.string().required('Không được bỏ trống'),
  address: yup.string().required('Không được bỏ trống'),
});
export default validationSchema;
