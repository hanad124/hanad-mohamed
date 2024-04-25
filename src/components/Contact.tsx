// ** React imports ***

// ** Third party imports ***
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FiGithub, FiFacebook, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Card>
      <CardHeader className="px-10">
        <CardTitle className="flex items-center gap-8">
          <span className="font-bold text-3xl  ">Contact</span>
          <div className="bg-blue-600 w-[4rem] md:w-[14rem] rounded-full py-[2px]"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-10">
        <div className="bg-[#f8fbfb] dark:bg-[#0d0d0d] py-10 px-5 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#f3f6f6] dark:bg-[#2a2a2a]/40 rounded-md py-3 px-4 text-slate-600 dark:text-white font-mono font-normal text-sm"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && typeof errors.name.message === "string" && (
                <span className="text-red-500 text-sm ml-2">
                  {errors.name.message}
                </span>
              )}
              <input
                type="email"
                placeholder="Email"
                className="bg-[#f3f6f6] dark:bg-[#2a2a2a]/40 rounded-md py-3 px-4 text-slate-600 dark:text-white font-mono font-normal text-sm"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && typeof errors.email?.message === "string" && (
                <span className="text-red-500 text-sm ml-2">
                  {errors.email.message}
                </span>
              )}
              <textarea
                placeholder="Message"
                className="bg-[#f3f6f6] dark:bg-[#2a2a2a]/40 rounded-md py-3 px-4 text-slate-600 dark:text-white font-mono font-normal text-sm"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && typeof errors.message.message === "string" && (
                <span className="text-red-500 text-sm ml-2">
                  {errors.message.message}
                </span>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 w-full py-2 rounded-md text-white font-bold"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="pt-10 pb-5 flex items-center justify-center gap-7">
          <FiFacebook className="text-bue-white w-6 h-6 cursor-pointer" />
          <FiTwitter className="text-bue-white w-6 h-6 cursor-pointer" />
          <FiGithub className="text-bue-white w-6 h-6 cursor-pointer" />
        </div>
        <div className="border-t border-[#a6a6a651] w-full pt-5">
          <p className="text-center text-slate-400">
            <span>© 2024 All Rights Reserved by</span>
            <Link
              to="https://github.com/hanad124"
              target="_blank"
              className="ml-1 font-bold"
            >
              Hanad Mohamed Dahir
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
