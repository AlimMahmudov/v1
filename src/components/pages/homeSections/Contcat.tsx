"use client";
import React from "react";
import scss from "../homeSections/Contcat.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  email: string;
  number: number;
  inquiry: string;
  message: string;
}

const Contcat = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email Addres:   <b>${data.email}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    messageTG += `Inquiry:  <b>${data.inquiry} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };

  return (
    <section id="contcat" className={scss.concat}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.ct}>
            <div className={scss.text}>
              <h1>Contact</h1>
              <h1 className={scss.textMe}>Me!</h1>
            </div>

            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.maus}>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />
                <input
                  type="number"
                  {...register("number", { required: true })}
                  placeholder="Mobile Number"
                />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your email"
                />
                <input
                  type="text"
                  {...register("inquiry", { required: true })}
                  placeholder="Subject of inquiry"
                />
              </div>
              <div className={scss.big}>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="message"
                ></textarea>
              </div>
              <div className={scss.buttonInp}>
                <button className={scss.SuButton} type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contcat;
