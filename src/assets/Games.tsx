import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function Games() {
  const navigate = useNavigate();
  const parametros = useParams();

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
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          width: "80%",
          padding: "20px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Button
          onClick={() => navigate("/")}
          style={{
            marginBottom: "10px",
            width: "20px",
            height: "15px",
            fontSize: "10px",
          }}
        >
          <IoIosArrowRoundBack />{" "}
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
          }}
        >
          <b>Pontuação: X</b>
          <b>Tentativas: Y </b>
        </div>

        <div>
          <h1 style={{ fontSize: "13px", marginTop: "15px" }}>
            {parametros.tipo == "1" && "Digite a tag que completa : <h1>"}
            {parametros.tipo == "2" && "Complete o Código: "}
            {parametros.tipo == "3" && "Responda: "}
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {parametros.tipo == "1" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                }}
              >
                <Textarea placeholder="Evite espaços desnecessários.(Sistema para remove-los automático esta sendo implementado)" />
                <Button>Enviar resposta!</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
