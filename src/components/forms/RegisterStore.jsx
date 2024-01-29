import InputMask from "react-input-mask";
import * as Yup from "yup";
import { cnpj as cnpjValidator } from "cpf-cnpj-validator";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { stripEverythingIsNotNumber } from "@/utils/stripString";

export default function RegisterStore() {
  const formik = useFormik({
    initialValues: {
      name: "",
      cnpj: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(
        4,
        "O nome da loja deve ter, no mínimo, 4 caracteres."
      ),
      cnpj: Yup.string().test("cnpj-is-valid", "CNPJ inválido", (value) => {
        const cnpj = stripEverythingIsNotNumber(value);
        return cnpjValidator.isValid(cnpj);
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

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <TextField
          label="Nome"
          variant="outlined"
          name="name"
          helperText={formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.name)}
        />
      </FormControl>
      <FormControl
        fullWidth
        sx={{ p: 1 }}
        variant="filled"
        value={formik.values.cnpj}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <InputMask mask="99.999.999/9999-99">
          {() => (
            <TextField
              label="CNPJ"
              variant="outlined"
              name="cnpj"
              helperText={formik.errors.cnpj}
              error={Boolean(formik.errors.cnpj)}
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
          Cadastrar loja
        </Button>
      </FormControl>
    </form>
  );
}
