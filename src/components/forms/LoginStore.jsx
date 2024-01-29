import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function LoginStore() {
  return (
    <form onSubmit={() => {}}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <InputMask mask="99.999.999/9999-99">
          {() => <TextField label="CNPJ" variant="outlined" />}
        </InputMask>
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
