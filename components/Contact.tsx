import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Cont, ContactBox, ContactImg, ContentBox, ContentBoxWrap, Form, SectionTitle } from "@/styles/componentsStyle";

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
    <ContentBox id="contact">
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
