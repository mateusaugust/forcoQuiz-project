import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Points() {
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
        style={{ textAlign: "center", position: "absolute", padding: "25px" }}
      >
        <CardHeader>
          <CardTitle style={{ fontSize: "30px", color: "#001EFF" }}>
            Pontuação
          </CardTitle>
          <CardDescription>Versão Demo 0.0.1</CardDescription>
        </CardHeader>

        <CardContent
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div style={{width:'100%', borderBottom:"1px solid #6B7280", display:'flex', justifyContent:'space-between' }}>
            <b>Simbolos iguais:</b> 40px
          </div>

          <div style={{width:'100%', borderBottom:"1px solid #6B7280", display:'flex', justifyContent:'space-between', alignItems:'center '}}>
            <b>Perguntas 
              <br/>de Completar:</b> 40px
          </div>

          <div style={{width:'100%', borderBottom:"1px solid #6B7280", display:'flex', justifyContent:'space-between' }}>
            <b>Múltiplhas Escolhas:</b> 100px
          </div>
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
