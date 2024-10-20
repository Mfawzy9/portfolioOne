"use client";
import { useLoaderProvider } from "@/app/Context/LoaderContext/LoaderContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FormEvent, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { z } from "zod";
import SubmittedModal from "./SubmittedModal";
import {
  ContactFormInputs,
  IErrorMessages,
  validateField,
  validationSchema,
} from "./validation";
import { ImSpinner9 } from "react-icons/im";

const formVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const inputVariants: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(100px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ContactForm = () => {
  const { loading } = useLoaderProvider();

  const [allInputs, setAllInputs] = useState<ContactFormInputs>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errorMessages, setErrorMessages] = useState<IErrorMessages>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault();

    try {
      validationSchema.parse(allInputs);
      const res = await fetch(`https://formcarry.com/s/o0G7mGV53sl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...allInputs }),
      });
      const data = await res.json();
      setSubmitting(false);
      if (data.status === "success") {
        setSubmitted(true);
        setAllInputs({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrorMessages({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitting(false);
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          setErrorMessages((prev) => ({
            ...prev,
            [issue.path[0]]: issue.message,
          }));
        });
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {submitted && <SubmittedModal setSubmitted={setSubmitted} />}
      </AnimatePresence>
      <motion.form
        onSubmit={formSubmit}
        variants={formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: loading ? 2.3 : 0.8,
        }}
        className="flex flex-col gap-4 h-full"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
          <motion.div variants={inputVariants} className="w-full">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={allInputs.name}
              onChange={(e) => {
                setAllInputs({ ...allInputs, name: e.target.value });
                validateField("name", e.target.value, setErrorMessages);
              }}
              className={` ${errorMessages.name ? "animate-inputShake !shadow-color-1 ring-1 !ring-color-1" : ""}`}
            />
            {errorMessages.name && (
              <p
                className="text-color-1 font-bold mt-2 bg-card rounded p-3 flex items-center border-2
                  border-destructive"
              >
                <FaInfoCircle className="me-2 animate-pulse" />
                {errorMessages.name}
              </p>
            )}
          </motion.div>
          <motion.div variants={inputVariants} className="w-full">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={allInputs.email}
              onChange={(e) => {
                setAllInputs({ ...allInputs, email: e.target.value });
                validateField("email", e.target.value, setErrorMessages);
              }}
              className={` ${errorMessages.email ? "animate-inputShake !shadow-color-1 ring-1 !ring-color-1" : ""}`}
            />
            {errorMessages.email && (
              <p
                className="text-color-1 font-bold mt-2 bg-card rounded p-3 flex items-center border-2
                  border-destructive"
              >
                <FaInfoCircle className="me-2 animate-pulse" />
                {errorMessages.email}
              </p>
            )}
          </motion.div>
        </div>
        <motion.div variants={inputVariants} className="w-full">
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={allInputs.phone}
            onChange={(e) => {
              setAllInputs({ ...allInputs, phone: e.target.value });
              validateField("phone", e.target.value, setErrorMessages);
            }}
          />
        </motion.div>
        <motion.div variants={inputVariants} className="w-full">
          <Input
            type="text"
            placeholder="Subject"
            name="subject"
            value={allInputs.subject}
            onChange={(e) => {
              setAllInputs({ ...allInputs, subject: e.target.value });
              validateField("subject", e.target.value, setErrorMessages);
            }}
            className={` ${errorMessages.subject ? "animate-inputShake !shadow-color-1 ring-1 !ring-color-1" : ""}`}
          />
          {errorMessages.subject && (
            <p
              className="text-color-1 font-bold mt-2 bg-card rounded p-3 flex items-center border-2
                border-destructive"
            >
              <FaInfoCircle className="me-2 animate-pulse" />
              {errorMessages.subject}
            </p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          className={`w-full ${errorMessages.message ? "" : "grow"} `}
        >
          <Textarea
            value={allInputs.message}
            onChange={(e) => {
              setAllInputs({ ...allInputs, message: e.target.value });
              validateField("message", e.target.value, setErrorMessages);
            }}
            name="message"
            placeholder="Message..."
            className={`flex
              ${errorMessages.message ? "h-auto animate-inputShake !shadow-color-1 ring-1 !ring-color-1" : "h-full"}
              w-full shadow-sm shadow-ring rounded border border-input bg-background px-3 py-2
              text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm
              file:font-medium file:text-foreground placeholder:text-muted-foreground
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          />
          {errorMessages.message && (
            <p
              className="text-color-1 font-bold mt-2 bg-card rounded p-3 flex items-center border-2
                border-destructive"
            >
              <FaInfoCircle className="me-2 animate-pulse" />
              {errorMessages.message}
            </p>
          )}
        </motion.div>
        <motion.div variants={inputVariants} className="w-full">
          <button
            disabled={submitting}
            type="submit"
            className="disabled:cursor-not-allowed disabled:active:scale-100
              disabled:hover:border-transparent p-3 w-full relative active:scale-[0.97]
              active:before:opacity-0 hover:border-ring border border-transparent rounded
              bg-background before:absolute before:-z-10 before:bottom-0 dark:before:bottom-1
              before:left-1/2 before:h-full dark:before:h-3/4 before:w-full
              before:-translate-x-1/2 before:animate-rainbow
              before:[background-image:linear-gradient(90deg,hsl(var(--ring)),hsl(210deg_40%_98%/0%),hsl(var(--ring)),hsl(210deg_40%_98%/0%),hsl(var(--ring)));]
              before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]"
          >
            {submitting ? (
              <ImSpinner9 className="animate-spin text-lg mx-auto" />
            ) : (
              <span className="flex items-center justify-center gap-3">
                Send Message
                <BsFillSendFill />
              </span>
            )}
          </button>
        </motion.div>
      </motion.form>
    </>
  );
};

export default ContactForm;
