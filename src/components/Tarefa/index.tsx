import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  titulo,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 1) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    dispatch(remover(id), setDescricao(descricaoOriginal))
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!isEditing}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {isEditing ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  }),
                  setEditing(false)
                )
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                setEditing(false)
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao
              onClick={() => {
                setEditing(true)
              }}
            >
              Editar
            </S.Botao>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
