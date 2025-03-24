import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MenuInitial() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#e6dbe6', width:'100%', height:'100vh'}}>
      <Card style={{ textAlign: "center", position: "absolute", padding:'25px' }}>
        <CardHeader>
          <CardTitle style={{fontSize:'30px', color:'#001EFF'}}>ForcoQuiz</CardTitle>
          <CardDescription>Versão Demo 0.0.1</CardDescription>
        </CardHeader>

        <CardContent style={{display:'flex', flexDirection:'column', gap:'15px'}}>
          <Button style={{backgroundColor:'#22C55E'}}>Jogar</Button>

          <Button style={{backgroundColor:'#3B82F6'}}>Exibir Pontuação</Button>

          <Button style={{backgroundColor:'#EAB308'}}>Sobre</Button>

          <Button style={{backgroundColor:'#EF4444'}}>Sair</Button>
        </CardContent>
      </Card>
    </div>
  );
}
