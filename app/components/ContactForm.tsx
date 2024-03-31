"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import React from "react";

export const ContactForm: React.FC = () => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      console.error("EmailJS environment variables are not set.");
      return;
    }
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
  };

  return (
    <form
      onSubmit={(e) => sendEmail(e)}
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
            name="name"
            type="text"
            className="border-gray-300"
          />
        </div>
        <div className="flex  w-full flex-col gap-1">
          <Label htmlFor="email">Adresse email</Label>
          <Input
            placeholder="jean@gmail.com"
            id="email"
            name="email"
            type="email"
            className="border-gray-300"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label htmlFor="phone">Numéro de téléphone</Label>
          <Input
            placeholder="06 12 34 56 78"
            id="phone"
            name="phone"
            type="tel"
            className="border-gray-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="subject">Objet</Label>
        <Input
          placeholder="Projet pour..."
          id="subject"
          name="subject"
          type="text"
          className="border-gray-300"
        />
      </div>
      <div className="flex h-full flex-col gap-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          placeholder="Bonjour, j'aimerais..."
          name="message"
          id="message"
          className="h-full border-gray-300"
        />
      </div>
      <Button>Envoyer</Button>
    </form>
  );
};
