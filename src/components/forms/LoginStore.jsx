import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { stripEverythingIsNotNumber } from "@/utils/stripString";

export default function LoginStore() {
  const formik = useFormik({
    initialValues: {
      cnpj: "",
      password: "",
      submit: "",
    },
    validationSchema: Yup.object().shape({
      cnpj: Yup.string().required("Email é um campo obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve conter, no mínimo, 6 caracteres.")
        .required("Senha é um campo obrigatório"),
    }),
    async onSubmit({ cnpj, password }) {
      // Passar essa constante como cnpj para a API
      const formattedCnpj = stripEverythingIsNotNumber(cnpj);
    },
  });

  return (
    <form onSubmit={() => {}}>
      <FormControl fullWidth sx={{ p: 1 }} variant="filled">
        <InputMask
          mask="99.999.999/9999-99"
          onChange={formik.handleChange}
          value={formik.values.cnpj}
        >
          {() => (
            <TextField
              label="CNPJ"
              variant="outlined"
              name="cnpj"
              error={Boolean(formik.errors.cnpj)}
              helperText={formik.errors.cnpj}
            />
          )}
        </InputMask>
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
