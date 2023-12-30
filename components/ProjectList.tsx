import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./common/Modal";
import { projectListArray } from "@/util/projectListArray";

const Wrapper = styled.div``;
const List = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  width: 100%;
`;
const ListItem = styled(motion.li)`
  width: 31%;
  padding: 1rem;
  border: 1px solid #c8c8c8;
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem 0 #c8c8c8;
  background-color: #fff;
  cursor: pointer;
  img {
    width: 100%;
    height: 13rem;
  }
  h3 {
    margin-top: 1.6rem;
    text-align: center;
    font-size: 2rem;
  }
`;

const ProjectList = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const callModal = (idx: number) => {
    setModalIdx(idx);
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <Wrapper>
      <List data-aos="fade-up">
        {projectListArray.map((item) => (
          <ListItem layoutId={`${item.id}`} key={item.id} whileHover={{ y: -16 }} onClick={() => callModal(item.id)}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </ListItem>
        ))}
      </List>
      {isModal ? <Modal idx={modalIdx} setIsModal={setIsModal} /> : null}
    </Wrapper>
  );
};

export default ProjectList;
