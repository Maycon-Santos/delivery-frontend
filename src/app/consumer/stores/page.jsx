import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ConsumerAppBar from "@/components/shared/ConsumerAppBar";
import { apiGet } from "@/service/api";
import StoreCard from "@/components/shared/StoreCard";

export default async function StoresPage() {
  const stores = await apiGet("/stores");

  return (
    <>
      <ConsumerAppBar />
      <Container>
        <Stack marginY={2} spacing={2}>
          <StoreCard
            image="https://placehold.co/600x400"
            name="Loja do Seu Zé"
            description="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor augue, euismod ut mollis sed, dignissim non dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus egestas tempor."
          />
          <StoreCard
            image="https://placehold.co/600x400"
            name="Loja do Seu Zé"
            description="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor augue, euismod ut mollis sed, dignissim non dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus egestas tempor."
          />
          <StoreCard
            image="https://placehold.co/600x400"
            name="Loja do Seu Zé"
            description="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor augue, euismod ut mollis sed, dignissim non dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus egestas tempor."
          />
        </Stack>
      </Container>
    </>
  );
}
