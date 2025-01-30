import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";

export default function MainAppbar() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant="contained" onClick={() => navigate("about")}>
        About
      </Button>
    </Stack>
  );
}
