import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function Games() {
  const navigate = useNavigate();
  const parametros = useParams();

  const data2 = ["opção 1", "opção2", "opção3"];
  const data3 = [
    { respost: "Porque1...", colorB: "#19b5a5" },
    { respost: "Porque2...", colorB: "#ede89d" },
    ,
    { respost: "Porque3...", colorB: "#ff6933" },
  ];

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
          onClick={() => navigate("/jogar")}
          style={{
            marginBottom: "10px",
            width: "20px",
            height: "15px",
            fontSize: "10px",
          }}
        >
          <IoIosArrowRoundBack />
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
            {parametros.tipo == "2" &&
              "Complete o Código com a opção correta: "}
            {parametros.tipo == "3" && "Encontre o erro: <Texto descritivo>"}
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              flexDirection: "column",
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
                }}
              >
                <Textarea placeholder="Evite espaços desnecessários.(Sistema para remove-los automático esta sendo implementado)" />
              </div>
            )}

            {parametros.tipo == "2" && (
              <>
                <div
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Codigo
                </div>

                <div>
                  {data2.map((op) => (
                    <div
                      key={op}
                      className="p-2 hover:bg-gray-200"
                      style={{
                        marginTop: "15px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <input type="checkbox" />
                      <label>{op}</label>
                    </div>
                  ))}
                </div>
              </>
            )}

            {parametros.tipo == "3" && (
              <>
                <div
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {"Codigo com erro: if()[]"}
                </div>

                <div style={{display:'flex', alignItems:"center", justifyContent:"center", marginTop:'15px', gap:'10px'}}>
                  {data3.map((op) => (
                    
                      <Button   style={{backgroundColor:op?.colorB,boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>{op?.respost}</Button>
                    
                  ))}
                </div>
              </>
            )}

            {parametros.tipo != "3" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Button>Enviar resposta!</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
