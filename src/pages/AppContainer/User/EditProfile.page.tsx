import { useFormik } from 'formik';
import { FC, memo } from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import { useAppSelector } from '../../../store';
import * as yup from 'yup';
import Button from '../../../components/Button/Button';
import { useHistory } from 'react-router-dom';
import EditInput from '../../../components/EditInput';

interface Props { }

const EditProfile: FC<Props> = (props) => {
    const user = useAppSelector((state) => state.user.byId[state.auth.id!]);

    const history = useHistory();

    let day = [];
    let month = [];
    let year = [];

    for (let i = 1; i <= 31; i++) {
        if (i < 10) {
            day.push("0" + i.toString());
            month.push("0" + i.toString());
        }
        else if (i >= 10 && i <= 12) {
            day.push(i.toString());
            month.push(i.toString());
        }
        else day.push(i.toString());
    }
    for (let i = 1980; i <= 2012; i++) {
        year.push(i.toString());
    }

    const { handleSubmit, errors, touched, isSubmitting, getFieldProps, handleReset } =
        useFormik({
            initialValues: {
                first_name: user.first_name,
                middle_name: user.middle_name,
                last_name: user.last_name,
                email: user.email,
                birth_date: user.birth_date,
                birth_month: user.birth_month,
                birth_year: user.birth_year,
                phone_number: user.phone_number
            },
            validationSchema: yup.object().shape({
                first_name: yup
                    .string()
                    .required("First Name is required field!"),
                middle_name: yup
                    .string(),
                last_name: yup
                    .string(),
                email: yup
                    .string()
                    .email(() => "Email is invalid")
                    .required("Email is a required field"),
                phone_number: yup
                    .number()
            }),
            onSubmit: (data) => {
                console.log(data);
                history.push("/profile");
            }
        });

    return (
        <div className={`w-full p-5 bg-gray-200 h-screen`}>
            <form className={`space-y-5`} onSubmit={handleSubmit}>
                <div className={`p-5 bg-white border border-gray-300 rounded-lg`}>
                    <h1 className={`font-bold mb-10`}>GENERAL INFORMATION</h1>
                    <div className={`flex flex-row space-x-5`}>
                        <Avatar avatarSize="xl" shape="square" showStatus={false} imgSrc={user.profile_pic_url}></Avatar>
                        <div className={`flex flex-col w-full space-y-5`}>
                            <div className={`flex flex-row space-x-5`}>
                                <EditInput
                                    {...getFieldProps("first_name")}
                                    errorMessage={errors.first_name}
                                    touched={touched.first_name}
                                    label="First Name"
                                    className={`w-1/3`}
                                />
                                <EditInput
                                    {...getFieldProps("middle_name")}
                                    errorMessage={errors.middle_name}
                                    touched={touched.middle_name}
                                    label="Middle Name"
                                    className={`w-1/3`}
                                />
                                <EditInput
                                    {...getFieldProps("last_name")}
                                    errorMessage={errors.last_name}
                                    touched={touched.last_name}
                                    label="Last Name"
                                    className={`w-1/3`}
                                />
                            </div>
                            <label htmlFor="dateOfBirth" className="flex flex-col">
                                <span className={`text-xs text-gray-500`} >Date of Birth</span>
                                <div className="flex flex-row space-x-2">
                                    <select
                                        {...getFieldProps("birth_date")}
                                        className={`outline-none border rounded-md h-10 w-16 border-gray-400`}
                                        onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-primary-medium shadow-primary" }}
                                        onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-gray-400" }}
                                    >
                                        {day.map((value, index) => {
                                            return <option key={index}>{value}</option>
                                        })}
                                    </select>
                                    <select
                                        {...getFieldProps("birth_month")}
                                        className={`outline-none border rounded-md h-10 w-16 border-gray-400`}
                                        onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-primary-medium shadow-primary" }}
                                        onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-gray-400" }}
                                    >
                                        {month.map((value, index) => {
                                            return <option key={index}>{value}</option>
                                        })}
                                    </select>
                                    <select
                                        {...getFieldProps("birth_year")}
                                        className={`outline-none border rounded-md h-10 w-20 border-gray-400`}
                                        onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-primary-medium shadow-primary" }}
                                        onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-gray-400" }}
                                    >
                                        {year.map((value, index) => {
                                            return <option key={index}>{value}</option>
                                        })}
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`p-5 bg-white border border-gray-300 rounded-lg`}>
                    <h1 className={`font-bold mb-4`}>Contact</h1>
                    <div className={`flex flex-row space-x-5`}>
                        <EditInput
                            {...getFieldProps("email")}
                            touched={touched.email}
                            errorMessage={errors.email}
                            label="Email"
                            className="w-1/2"
                        />
                        <EditInput
                            {...getFieldProps("phone_number")}
                            touched={touched.phone_number}
                            errorMessage={errors.phone_number}
                            label="Phone Number"
                            className="w-1/2"
                        />
                    </div>
                </div>
                <div className={`fixed bottom-0 flex flex-row justify-between`} style={{ width: 'calc(100% - 164px)' }}>
                    <Button text="Reset All" type="reset" onClick={(event) => {
                        handleReset.call(null, event);
                    }} />
                    <Button text="Save Changes" type="submit" theme="success" disabled={isSubmitting} />
                </div>
            </form>
        </div >
    );
};

EditProfile.defaultProps = {};

export default memo(EditProfile);