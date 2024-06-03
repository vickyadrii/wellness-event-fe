/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { api } from "@/configs";
import { useToast } from "@/components/ui/use-toast";
import { ResponseErrorJSON, ResponseSuccessJSON } from "@/types/response";
import { useState } from "react";
import { Spin } from "@/components/ui/spin";
import { setAccessToken } from "@/lib/authStorage";
import { authActions } from "@/store/auth";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const res: ResponseSuccessJSON = await api.post("/api/auth/login", values);
      const { token, ...dataWithoutToken } = res.data;

      dispatch(authActions.login(dataWithoutToken));
      setAccessToken(res.data?.token);
      toast({
        title: "Success!",
        description: res?.message,
        duration: 2500,
      });
      navigate("/dashboard");
    } catch (error) {
      const err = error as ResponseErrorJSON;
      console.log(err);

      toast({
        title: "Error!",
        description: err?.response?.data?.message ?? "Oops Something Wrong!",
        duration: 2500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-5 flex justify-center items-center h-screen">
      <div className="bg-white p-20 w-full rounded-md shadow">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-green-600 text-2xl font-bold">Hello, Welcome back!</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-8">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>username</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="username..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button variant="primary" size="lg" type="submit">
                  {isLoading ? <Spin /> : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
