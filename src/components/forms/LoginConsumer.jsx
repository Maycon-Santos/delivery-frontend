import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

export default function LoginConsumer() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Email inválido"),
      password: Yup.string().min(
        6,
        "A senha deve conter, no mínimo, 6 caracteres."
      ),
    }),
    onSubmit() {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <Button variant="contained" size="large">
          Entrar
        </Button>
      </FormControl>
    </form>
  );
}
