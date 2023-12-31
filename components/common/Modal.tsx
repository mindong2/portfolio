import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { projectListArray } from "@/util/projectListArray";
import { ModalBox, ModalContent, Overlay } from "@/styles/common";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 3rem;
  width: 76.8rem;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  transform: translate(-50%, -50%) !important;
  z-index: 1001;

  @media screen and (max-width: 578px) {
    width: 90%;
  }

  svg {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 2.6rem;
    cursor: pointer;
  }
`;

const Modal = ({ idx, setIsModal }: { idx: number; setIsModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const modalData = projectListArray.filter((item) => item.id === idx)[0];
  return (
    <>
      {idx && (
        <Wrapper layoutId={`${modalData.id}`}>
          <svg
            onClick={() => {
              setIsModal(false);
              document.body.style.overflow = "visible";
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <AnimatePresence>
            <ModalBox>
              <img src={modalData.img} alt="모달 이미지" />
              <ModalContent>
                <h2>{modalData.title}</h2>
                <h3>
                  🔗 링크
                  <p>
                    <a href={modalData.link} target="_blank">
                      {modalData.link}
                    </a>
                  </p>
                </h3>
                {modalData.github !== "" ? (
                  <h3>
                    <img className="github" src="/image/github-logo.svg" alt="" /> 깃허브 링크
                    <p>
                      <a href={modalData.github} target="_blank">
                        {modalData.github}
                      </a>
                    </p>
                  </h3>
                ) : null}
                <h3>
                  🌈 개발환경 <p>{modalData.skill}</p>
                </h3>
                <h3>
                  💭 설명 <p>{modalData.desc}</p>
                </h3>
                <h3>
                  👩‍💻 업무 [{modalData.date}]
                  {modalData.work.map((v, idx) => (
                    <p key={idx}>- {v}</p>
                  ))}
                </h3>
                <h3>
                  👏 성과 및 느낀점
                  <p>{modalData.mean}</p>
                </h3>
              </ModalContent>
            </ModalBox>
          </AnimatePresence>
        </Wrapper>
      )}
      <Overlay
        onClick={() => {
          setIsModal(false);
          document.body.style.overflow = "visible";
        }}
      />
    </>
  );
};

export default Modal;
