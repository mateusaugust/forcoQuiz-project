import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useEffect } from "react";

export function MenuInitial() {
  const navigate = useNavigate();

  useEffect(() => {
    toast("Bem-vindo ao ForcoQuiz! Nosso jogo ainda esta em desenvolvimento, logo podendo haver partes incompletas.", {
      position: "bottom-right",
      duration: 10000, // Fecha automaticamente em 3 segundos
      style: {
        fontSize: "10px", // Reduz o tamanho do texto
        padding: "8px 12px", // Diminui o padding
        width: "150px", // Define um tamanho menor
      },
    });
  }, []);

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
      <Card style={{ textAlign: "center", position: "absolute", padding: "25px" }}>
        <CardHeader>
          <CardTitle style={{ fontSize: "30px", color: "#001EFF" }}>
            ForcoQuiz
          </CardTitle>
          <CardDescription>Versão Demo 0.0.1</CardDescription>
        </CardHeader>

        <CardContent style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Button style={{ backgroundColor: "#22C55E" }} onClick={() => navigate("/jogar")}>
            Jogar
          </Button>

          <Button style={{ backgroundColor: "#3B82F6" }} onClick={() => navigate("/pontuacao")}>
            Exibir Pontuação
          </Button>

          <Button style={{ backgroundColor: "#EAB308" }} onClick={() => navigate("/sobre")}>
            Sobre
          </Button>

          <Button disabled style={{ backgroundColor: "#EF4444" }}>Sair</Button>
        </CardContent>
      </Card>

      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}
