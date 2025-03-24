import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

export function About() {
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
      <Card
        style={{ textAlign: "center", position: "absolute"}}
      >
        <CardHeader>
          <CardTitle style={{ fontSize: "30px", color: "#001EFF" }}>
            <br/>
            <br/>
            Sobre o ForcoQuiz
          </CardTitle>
          <CardDescription>Versão Demo 0.0.1</CardDescription>
        </CardHeader>

        <CardContent
          style={{ display: "flex", flexDirection: "column"}}
        >
          
            <p style={{textAlign:'justify'}}>
              O ForcoQuiz é um jogo educativo que combina elementos de quiz e
              forca. Em vez de adivinhar uma palavra, o jogador deve responder
              perguntas ou completar frases, possuindo um número limitado de
              tentativas.<br/><br/>
        
              <strong>
                Tipos de Jogos<br/>
              </strong>

              <br/>
              <b>Símbolos Iguais (10xp):</b> Encontre os símbolos que se repetem.<br/>
              <b>Completar Frases (50xp):</b> Complete a frase com a palavra correta.<br/>
              <b>Múltipla Escolha (100xp):</b> Escolha a resposta correta entre as
              opções.
              <br />
            

              Desenvolvido por <strong>Mateus Augusto da Silva</strong> como parte de um projeto educacionas
            </p>
         
        </CardContent>

        <CardFooter
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button style={{ backgroundColor: "#6B7280" }}>Voltar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
