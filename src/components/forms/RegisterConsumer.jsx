import { useFormik } from "formik";
import * as Yup from "yup";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { stripEverythingIsNotNumber } from "@/utils/stripString";

export default function RegisterConsumer() {
  const formik = useFormik({
    initialValues: {
      email: "",
      cpf: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Email inválido"),
      cpf: Yup.string().test("cpf-is-valid", "CPF inválido", (value) => {
        const cpf = stripEverythingIsNotNumber(value);
        return cpfValidator.isValid(cpf);
      }),
      password: Yup.string().min(
        6,
        "A senha deve conter, no mínimo, 6 caracteres."
      ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "As senhas não são iguais"
      ),
    }),
    onSubmit() {
      console.log("Fez o submit");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          helperText={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.email)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <InputMask
          mask="999.999.999-99"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {() => (
            <TextField
              label="CPF"
              variant="outlined"
              name="cpf"
              helperText={formik.errors.cpf}
              error={Boolean(formik.errors.cpf)}
            />
          )}
        </InputMask>
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Senha"
          variant="outlined"
          name="password"
          helperText={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.password)}
          type="password"
        />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Confirmar senha"
          variant="outlined"
          name="confirmPassword"
          helperText={formik.errors.confirmPassword}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.confirmPassword)}
          type="password"
        />
      </FormControl>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <Button variant="contained" size="large">
          Cadastrar entregador
        </Button>
      </FormControl>
    </form>
  );
}
