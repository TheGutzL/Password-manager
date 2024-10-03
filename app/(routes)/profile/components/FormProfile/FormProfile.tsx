"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  defaultValues,
  formProfileSchema,
  FormProfileSchema,
} from "./FormProfile.form";
import { FormProfileProps } from "./FormProfile.types";

const FormProfile = ({ user }: FormProfileProps) => {
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const form = useForm<FormProfileSchema>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      ...defaultValues,
      ...Object.fromEntries(
        Object.entries(user).map(([key, value]) => [key, value ?? ""])
      ),
    },
  });

  const onSubmit: SubmitHandler<FormProfileSchema> = async (data) => {
    try {
      await axios.patch(`/api/profile`, data);
      toast({
        title: "Profile updated",
      });
      router.refresh();
      setShowUploadPhoto(false);
      setPhotoUploaded(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={
                          user.profileImage
                            ? user.profileImage
                            : "/images/default-profile.png"
                        }
                        alt="Profile Image"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="w-[200px]">
                        {showUploadPhoto ? (
                          <UploadButton
                            className="rounded-md text-slate-800 bg-slate-200 mt-3"
                            {...field}
                            endpoint="profileImage"
                            onClientUploadComplete={(res) => {
                              form.setValue("profileImage", res?.[0].url);
                              setPhotoUploaded(true);
                            }}
                            onUploadError={(error: Error) => {
                              console.log(error);
                            }}
                          />
                        ) : (
                          <Button
                            onClick={() => setShowUploadPhoto((prev) => !prev)}
                          >
                            <Upload className="mr-2 w-4 h-4" /> Change Photo
                          </Button>
                        )}
                      </div>
                    </div>
                    {photoUploaded && (
                      <p className="text-sm">Image uploaded!</p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Wick"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="@JohnWick"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormProfile;
