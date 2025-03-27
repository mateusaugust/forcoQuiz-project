import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function TypePlay() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6dbe6",
        width: "100%",
        height: "100vh",
      }}
    >
      <Card style={{ textAlign: "center", position: "absolute", width:'70%'}}>
        <CardHeader>
          <CardTitle style={{ fontSize: "30px", color: "#001EFF" }}>
            Escolha o Tipo de Jogo
          </CardTitle>
          <CardDescription>Versão Demo 0.0.1</CardDescription>
        </CardHeader>

        <CardContent
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <Button onClick={()=>navigate("/game/1")} style={{ backgroundColor: "#A855F7" }}>
            Símbolos Iguais
          </Button>

          <Button onClick={()=>navigate("/game/2")} style={{ backgroundColor: "#3B82F6" }}>
            Completar o Codigo
          </Button>

          <Button onClick={()=>navigate("/game/3")} style={{ backgroundColor: "#14B8A6" }}>
            Encontre o Erro
          </Button>

          <Button
            style={{
              backgroundColor: "#6B7280",
            }}
            onClick={() => navigate("/")}
          
          >
            Voltar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
