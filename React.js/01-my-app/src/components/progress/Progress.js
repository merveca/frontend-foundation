import React, { useState } from "react";
import { Container, ProgressBar, ButtonGroup, Button } from "react-bootstrap";

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const degisim = 10;

  const artir = () => {
    if (progress < 100) setProgress(progress + degisim);
  };

  const azalt = () => {
    if (progress > 0) setProgress(progress - degisim);
  };

  return (
    <Container className="mt-5">
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={artir}>
          +
        </Button>
        <Button variant="danger" onClick={azalt}>
          -
        </Button>
      </ButtonGroup>

      <ProgressBar
        striped
        variant="success"
        now={progress}
        label={`${progress}%`}
        className="mt-5"
      />
    </Container>
  );
};

export default Progress;
