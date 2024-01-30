import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ConsumerAppBar from "@/components/shared/ConsumerAppBar";
import { apiGet } from "@/service/api";
import StoreCard from "@/components/shared/StoreCard";

export default async function StoresPage() {
  const stores = await apiGet("/stores");

  return (
    <>
      <ConsumerAppBar />
      <Container>
        {!stores.success && (
          <Typography color="red">Não foi possível encontrar lojas</Typography>
        )}
        {stores.success && (
          <Stack marginY={2} spacing={2}>
            {stores.data.map(({ id, name }) => (
              <StoreCard
                key={id}
                id={id}
                image="https://picsum.photos/600/300?count=1"
                name={name}
              />
            ))}
          </Stack>
        )}
      </Container>
    </>
  );
}
