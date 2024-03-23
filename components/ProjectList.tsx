import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./common/Modal";
import { projectListArray } from "@/util/projectListArray";
import { List, ListItem } from "@/styles/componentsStyle";

const Wrapper = styled.div``;

const ProjectList = ({status} : {status: string}) => {
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
        {projectListArray.filter(v => v.tabStatus === status).map((item) => (
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
