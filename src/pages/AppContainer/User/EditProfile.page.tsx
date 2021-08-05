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
        <div className={`w-full`}>
            <form className={`p-5 space-y-5`} onSubmit={handleSubmit}>
                <div className={`p-5 border-black border-2 rounded-lg`}>
                    <h1 className={``}>General Information</h1>
                    <div className={`flex flex-row`}>
                        <button>
                            <Avatar avatarSize="xl" shape="square" showStatus={false} imgSrc={user.profile_pic_url}></Avatar>
                        </button>
                        <div className={`flex flex-col w-full`}>
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
                            <div>
                                <select {...getFieldProps("birth_date")}>
                                    {day.map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    })}
                                </select>
                                <select {...getFieldProps("birth_month")}>
                                    {month.map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    })}
                                </select>
                                <select {...getFieldProps("birth_year")}>
                                    {year.map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-5 border-black border-2 rounded-lg`}>
                    <h1>Contact</h1>
                    <div className={`flex flex-row`}>
                        <EditInput
                            {...getFieldProps("email")}
                            touched={touched.email}
                            errorMessage={errors.email}
                            label="Email"
                        />
                        <EditInput
                            {...getFieldProps("phone_number")}
                            touched={touched.phone_number}
                            errorMessage={errors.phone_number}
                            label="Phone Number"
                        />
                    </div>
                </div>
                <div className={`flex flex-row justify-between`}>
                    <Button text="Reset All" type="reset" onClick={(event) => {
                        handleReset.call(null, event);
                    }} />
                    <Button text="Save Changes" type="submit" buttonType="success" />
                </div>
            </form>
        </div>
    );
};

EditProfile.defaultProps = {};

export default memo(EditProfile);