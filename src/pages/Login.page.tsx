import { FC, memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import Copyrights from '../components/Copyrights';
import LinkTo from '../components/LinkTo';
import InputField from '../components/form/InputField';
import Icon from '../components/form/Icon';
import Button from '../components/Button/Button';
import FormSwitch from '../components/form/FormSwitch';

interface Props { }

const Login: FC<Props> = (props) => {

    const redirectHistory = useHistory();

    const { handleSubmit, errors, touched, isSubmitting, getFieldProps } =
        useFormik({
            initialValues: {
                username: "",
                password: ""
            },
            validationSchema: yup.object().shape({
                username: yup
                    .string()
                    .required("Username is required field!"),
                password: yup
                    .string()
                    .required("Cannot login without a password")
                    .matches(
                        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                    )
            }),
            onSubmit: (data, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(data);
                    setSubmitting(false);
                    redirectHistory.push("/dashboard");
                }, 3000);
            }
        });

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="w-full font-nunito">
            <div className="px-10 sm:px-0 flex flex-col justify-center min-h-screen space-y-16 mx-auto max-w-26rem">
                <div className="space-y-3">
                    <h1 className="text-4xl font-normal">Log In to <span className="text-primary-dark font-bold">CODEBITS</span></h1>
                    <h5 className="text-sm font-bold">New Here? <LinkTo to="/signup" text="Create an account" className="border-b border-primary-dark" /></h5>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                    <div className="space-y-12">
                        <InputField
                            {...getFieldProps("username")}
                            name="username"
                            type="username"
                            placeholder="Username"
                            touched={touched.username}
                            errorMessage={errors.username}
                        >
                            <Icon className="mr-3">
                                <>
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </>
                            </Icon>
                        </InputField>
                        <InputField
                            {...getFieldProps("password")}
                            name="password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Password"
                            touched={touched.password}
                            errorMessage={errors.password}
                        >
                            <Icon className="mr-3">
                                <>
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                                    </rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4">
                                    </path>
                                </>
                            </Icon>
                        </InputField>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between">
                        <FormSwitch forSetting="Show Password" enabled={isShowPassword} setEnabled={() =>
                            setIsShowPassword(!isShowPassword)
                        }></FormSwitch>
                        <Button buttonSize="small" text="Log in" buttonDisabled={isSubmitting} />
                    </div>
                    <div className="flex flex-col text-center space-y-4 pt-8">
                        <div className="text-secondary-light space-x-3">
                            <input type="checkbox" name="keepLoggedIn" />
                            <label htmlFor="keepLoggedIn">Keep me logged in</label>
                        </div>
                        <LinkTo to="/forgot-password" text="Forgot Password?" className="font-bold" />
                    </div>
                </form>
                <Copyrights className="font-medium text-sm text-center" />
            </div>
        </div>
    );
};

Login.defaultProps = {};

export default memo(Login);