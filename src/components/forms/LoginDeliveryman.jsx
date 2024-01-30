import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LoginDeliveryman() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email inválido")
        .required("Email é um campo obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve conter, no mínimo, 6 caracteres.")
        .required("Senha é um campo obrigatório"),
    }),
    async onSubmit({ email, password }) {},
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
        <Button variant="contained" size="large" type="submit">
          Entrar
        </Button>
        {formik.errors.submit && (
          <Typography color="red" textAlign="center" marginTop={1}>
            {formik.errors.submit}
          </Typography>
        )}
      </FormControl>
    </form>
  );
}
