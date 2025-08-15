import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, titulo, prioridade, status, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {isEditing ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
