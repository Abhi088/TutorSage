import { useFormik } from 'formik';
import { FC, memo, useEffect } from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import { useAppSelector } from '../../../store';
import * as yup from 'yup';
import Button from '../../../components/Button/Button';
import EditInput from '../../../components/EditInput';
import { updateUser } from '../../../APIs/auth';
import { pathActions } from '../../../actions/path.actions';

interface Props { }

const EditProfile: FC<Props> = (props) => {
    const user = useAppSelector((state) => state.auth.byId[state.auth.id!]);

    useEffect(() => { pathActions.setPath(window.location.pathname.split("/").splice(1)); })

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
                first_name: user.first_name || "",
                middle_name: user.middle_name || "",
                last_name: user.last_name || "",
                gender: user.gender || "",
                birth_date: user.birth_date || "Day",
                birth_month: user.birth_month || "Month",
                birth_year: user.birth_year || "Year",
                phone_number: user.phone_number || "",
                alternate_phone_number: user.alternate_phone_number || "",
                email: user.email || "",
                education: user.education || "",
                hometown: user.hometown || "",
                home_state_code: user.home_state_code || ""
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
                    .string()
                    .required("Phone Number is required"),
                alternate_phone_number: yup
                    .string(),
                education: yup.string(),
                hometown: yup.string(),
                home_state_code: yup.string()
            }),
            onSubmit: (data) => {
                updateUser(data).then((response) => {
                    console.log(response?.data);
                    window.location.href = "/dashboard";
                });
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
                            <div className={`flex flex-row space-x-10`}>
                                <label htmlFor="dateOfBirth" className="flex flex-col">
                                    <span className={`text-xs text-gray-500`} >Date of Birth</span>
                                    <div className="flex flex-row space-x-2">
                                        <select
                                            {...getFieldProps("birth_date")}
                                            className={`outline-none border rounded-md h-10 w-16 border-gray-400`}
                                            onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-primary-medium shadow-primary" }}
                                            onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-16 border-gray-400" }}
                                        >
                                            <option>Day</option>
                                            {day.map((value, index) => {
                                                return <option key={index}>{value}</option>
                                            })}
                                        </select>
                                        <select
                                            {...getFieldProps("birth_month")}
                                            className={`outline-none border rounded-md h-10 w-20 border-gray-400`}
                                            onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-primary-medium shadow-primary" }}
                                            onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-gray-400" }}
                                        >
                                            <option>Month</option>
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
                                            <option>Year</option>
                                            {year.map((value, index) => {
                                                return <option key={index}>{value}</option>
                                            })}
                                        </select>
                                    </div>
                                </label>
                                <label htmlFor="dateOfBirth" className="flex flex-col">
                                    <span className={`text-xs text-gray-500`} >Gender</span>
                                    <select
                                        {...getFieldProps("gender")}
                                        className={`outline-none border rounded-md h-10 w-20 border-gray-400`}
                                        onFocus={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-primary-medium shadow-primary" }}
                                        onBlur={(event) => { event.target.className = "outline-none border rounded-md h-10 w-20 border-gray-400" }}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-5 bg-white border border-gray-300 rounded-lg`}>
                    <h1 className={`font-bold mb-4`}>Education</h1>
                    <EditInput
                        {...getFieldProps("education")}
                        touched={touched.education}
                        errorMessage={errors.education}
                        label="Education"
                        className="w-full"
                    />
                </div>
                <div className={`p-5 bg-white border border-gray-300 rounded-lg`}>
                    <h1 className={`font-bold mb-4`}>Address</h1>
                    <div className={`flex flex-row space-x-5`}>
                        <EditInput
                            {...getFieldProps("hometown")}
                            touched={touched.hometown}
                            errorMessage={errors.hometown}
                            label="Hometown"
                            className="w-1/2"
                        />
                        <EditInput
                            {...getFieldProps("home_state_code")}
                            touched={touched.home_state_code}
                            errorMessage={errors.home_state_code}
                            label="Home State Code"
                            className="w-1/2"
                        />
                    </div>
                </div>
                <div className={`p-5 bg-white border border-gray-300 rounded-lg`}>
                    <h1 className={`font-bold mb-4`}>Contact</h1>
                    <div className={`flex flex-col space-y-4`}>
                        <EditInput
                            {...getFieldProps("email")}
                            touched={touched.email}
                            errorMessage={errors.email}
                            label="Email"
                            className="w-full"
                        />
                        <div className={`flex flex-row space-x-5`}>
                            <EditInput
                                {...getFieldProps("phone_number")}
                                touched={touched.phone_number}
                                errorMessage={errors.phone_number}
                                label="Phone Number"
                                className="w-1/2"
                            />
                            <EditInput
                                {...getFieldProps("alternate_phone_number")}
                                touched={touched.alternate_phone_number}
                                errorMessage={errors.alternate_phone_number}
                                label="Alternate Phone Number"
                                className="w-1/2"
                            />
                        </div>
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