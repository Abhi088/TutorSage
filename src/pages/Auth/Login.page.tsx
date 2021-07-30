import { FC, memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import Copyrights from '../../components/Copyrights';
import LinkTo from '../../components/LinkTo';
import InputField from '../../components/InputField/InputField';
import Icon from '../../components/Icons/Icons';
import Button from '../../components/Button/Button';
import FormSwitch from '../../components/FormSwitch';
import { login } from '../../APIs/auth';

interface Props { }

const Login: FC<Props> = (props) => {

    const redirectHistory = useHistory();

    const { handleSubmit, errors, touched, isSubmitting, getFieldProps } =
        useFormik({
            initialValues: {
                email: "",
                password: ""
            },
            validationSchema: yup.object().shape({
                email: yup
                    .string()
                    .email(() => "Email is invalid")
                    .required("Email is required field!"),
                password: yup
                    .string()
                    .required("Cannot login without a password")
            }),
            onSubmit: (data) => {
                login(data).then((response) => {
                    console.log(response);
                    redirectHistory.push("/dashboard");
                });
            }
        });

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="w-full font-nunito">
            <div className="px-10 sm:px-0 flex flex-col justify-center min-h-screen space-y-16 mx-auto max-w-26rem">
                <div className="space-y-3">
                    <h1 className="text-4xl font-normal">Log In to <span className="text-primary-medium font-bold">CODEBITS</span></h1>
                    <h5 className="text-sm font-bold">New Here? <LinkTo to="/signup" text="Create an account" className="border-b border-primary-medium" /></h5>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                    <div className="space-y-12">
                        <InputField
                            {...getFieldProps("email")}
                            name="email"
                            type="email"
                            placeholder="Email"
                            touched={touched.email}
                            errorMessage={errors.email}
                        >
                            <Icon className="mr-3" name="username"></Icon>
                        </InputField>
                        <InputField
                            {...getFieldProps("password")}
                            name="password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Password"
                            touched={touched.password}
                            errorMessage={errors.password}
                        >
                            <Icon className="mr-3" name="password"></Icon>
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