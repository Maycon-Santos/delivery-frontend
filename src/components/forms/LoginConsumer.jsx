import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function LoginConsumer() {
  return (
    <form onSubmit={() => {}}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField label="Email" variant="outlined" />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField label="Senha" variant="outlined" type="password" />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <Button variant="contained" size="large">
          Entrar
        </Button>
      </FormControl>
    </form>
  );
}
