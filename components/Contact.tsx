import React, { useRef, useState } from "react";
import { ContentBox, ContentBoxWrap, SectionTitle } from "./Profile";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  height: 35.6rem;
`;
const ContactImg = styled.img`
  width: 48.5%;
  border-radius: 0.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem 0;
  width: 48.5%;
  height: 100%;
  input,
  textarea {
    padding: 1rem;
    border: 0.1rem solid #c8c8c8;
    border-radius: 0.4rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-size: 1.6rem;
    resize: none;

    &:focus {
      border: 0.1rem solid #ff5d6a;
      box-shadow: 0 0 0 1px #ff5d6a inset;
    }
  }

  button {
    padding: 1rem;
    font-size: 1.8rem;
    background-color: #ff5d6a;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff2637;
    }
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formData = useRef<HTMLFormElement | null>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm("정말로 메일을 보내시겠어요?")) {
      try {
        setIsLoading(true);
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_MAIL_SERVER_KEY!,
          process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY!,
          formData.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY!
        );
        setName("");
        setEmail("");
        setMessage("");
        alert("전송되었습니다!");
      } catch (err) {
        console.dir(err);
        alert("메일전송중 문제가 생겼습니다.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ContentBox id="skills">
      <ContentBoxWrap>
        <ContactBox>
          <SectionTitle data-aos="fade">
            <span>C</span>ontact
          </SectionTitle>
          <Cont>
            <ContactImg src="/image/contact.jpg" alt="" data-aos="fade-down" />
            <Form id="contact-form" data-aos="fade-up" onSubmit={onSubmit} ref={formData}>
              <input
                name="name"
                type="text"
                placeholder="이름"
                maxLength={6}
                autoComplete="off"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <input
                name="email"
                type="email"
                placeholder="이메일주소"
                autoComplete="off"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                rows={9}
                placeholder="보내고싶은 말을 적어주세요 :)"
                autoComplete="off"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              />
              <button type="submit">{isLoading ? "전송중..." : "전송하기"}</button>
            </Form>
          </Cont>
        </ContactBox>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Contact;
