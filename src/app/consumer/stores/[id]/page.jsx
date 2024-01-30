import ConsumerAppBar from "@/components/shared/ConsumerAppBar";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { apiGet } from "@/service/api";

export default async function StorePage(props) {
  const { params } = props;
  const store = await apiGet(`/store/${params.id}`);
  const menus = await apiGet(`/menus-items/${params.id}`);

  console.log(menus);

  return (
    <>
      <ConsumerAppBar title={store.data.name} />
      <Container>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {menus.data.map(({ id, menu_name: menuName, items }) => (
            <li key={id}>
              <ul>
                <ListSubheader>{menuName}</ListSubheader>
                {items.map(({ id: itemID, name, price }) => (
                  <ListItem key={itemID}>
                    <ListItemText primary={name} secondary={`R$ ${price}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Container>
    </>
  );
}
