import React, { Fragment, useState } from "react";
import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";
import { CreateAssignmentForm, Modal } from "../index";

const DashboardAssignments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateAssignmentForm setShowModal={setShowModal} />
        </Modal>
      )}
      <Collapsible
        trigger={
          <React.Fragment>
            <h1>My Assignments</h1>
            <FaAngleDown />
          </React.Fragment>
        }
      >
        <p> You do not have any assignments</p>
        <button onClick={() => setShowModal(true)}> Create Assignment </button>
      </Collapsible>
    </Fragment>
  );
};

export default DashboardAssignments;
