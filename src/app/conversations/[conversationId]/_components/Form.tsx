"use client";

import useConversation from "@/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { BiSend } from "react-icons/bi";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Import useState hook
import { Loader } from "lucide-react";

const Form = () => {
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      // Submit form data
      await axios.post("/api/messages", {
        ...data,
        conversationId: conversationId,
      });
      setValue("message", "", { shouldValidate: true });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after message is sent (success or failure)
    }
  };

  const handleUpload = async (result: any) => {
    setIsLoading(true); // Set loading state to true when uploading image
    try {
      // Upload image
      await axios.post("/api/messages", {
        image: result.info.secure_url,
        conversationId: conversationId,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after image is uploaded (success or failure)
    }
  };

  return (
    <div className="py-4 px-4 dark:bg-[] border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="zt6ojhlz"
      >
        <HiPhoto size={30} className="text-primary" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          placeholder="Write a message..."
        />
        <Button type="submit" className="flex items-center gap-2">
          {isLoading ? (
            <span className="flex items-center gap-1">
              Sending...
              <Loader className="w-5 h-5 text-white animate-spin" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send
              <BiSend />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
