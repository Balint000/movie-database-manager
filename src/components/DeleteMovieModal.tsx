import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { type Movie } from "../models/Movie";

function DeleteMovieModal() {
  return (
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Törlés megerősítése</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Biztosan törölni szeretnéd a(z) "
        {movies.find((m) => m.id === movieToDelete)?.title || "ezt"}" filmet a
        listáról?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Mégse
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Törlés megerősítése
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteMovieModal;
