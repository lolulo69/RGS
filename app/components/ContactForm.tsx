"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Votre nom est requis"),
  email: z.string().email("Merci d'entrer une vraie adresse email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Vous devez entrer un message"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const sendEmail: SubmitHandler<FormData> = async (data) => {
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      console.error("EmailJS environment variables are not set.");
      return;
    }

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      // For optional fields, ensure only non-undefined values are appended
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    formData.append("service_id", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    formData.append("template_id", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    formData.append("user_id", process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        {
          method: "POST",
          body: formData,
        },
      );
      if (response.ok) {
        toast("Votre message a bien été envoyé !");
      } else {
        toast("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Send email error:", error);
      toast("Une erreur est survenue lors de l'envoi du message.");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex h-[400px] max-h-full flex-col gap-4 md:w-[60%]"
    >
      <p className="text-lg text-gray-600">
        Vous avez une question ou un projet en tête ?
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="name">Nom complet</Label>
          <Input
            placeholder="Jean Dupont"
            id="name"
            type="text"
            className="border-gray-300"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex  w-full flex-col gap-1">
          <Label htmlFor="email">Adresse email</Label>
          <Input
            placeholder="jean@gmail.com"
            id="email"
            {...register("email")}
            type="email"
            className="border-gray-300"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="phone">Numéro de téléphone</Label>
          <Input
            placeholder="06 12 34 56 78"
            id="phone"
            {...register("phone")}
            type="tel"
            className="border-gray-300"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="subject">Objet</Label>
        <Input
          placeholder="Projet pour..."
          id="subject"
          {...register("subject")}
          type="text"
          className="border-gray-300"
        />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>
      <div className="flex h-full flex-col gap-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          placeholder="Bonjour, j'aimerais..."
          {...register("message")}
          id="message"
          className="h-full border-gray-300"
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <Button>Envoyer</Button>
    </form>
  );
};
