import React, { useEffect, useMemo, useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, View } from "react-native";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import { Input } from "../../../components/Input";
import { formatDisciplineName } from "./../../../utils/formatDisciplineName";

import styles from "./styles";

import { useStudent } from "../../../hooks/StudentContext";
import api from "../../../services/api";

const AlertEmissionModal = ({ isVisible, setIsVisible }) => {
	const { student, currentSchedule } = useStudent();

	const discipline = currentSchedule
		? {
				label: currentSchedule?.class_to_replace
					? formatDisciplineName(
							currentSchedule?.class_to_replace?.discipline?.name
					  )
					: formatDisciplineName(currentSchedule?.discipline?.name),
				value: currentSchedule?.class_to_replace
					? currentSchedule?.class_to_replace?.discipline?.id
					: currentSchedule?.discipline?.id,
		  }
		: {};

	const teachers = currentSchedule
		? currentSchedule?.discipline?.taught_by?.map(({ id, name }) => {
				return {
					label: name,
					value: id,
				};
		  })
		: [];

	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		student_id: student.id,
		discipline_id: currentSchedule?.class_to_replace
			? currentSchedule?.class_to_replace?.discipline?.id
			: discipline?.value,
		teacher_id: currentSchedule?.class_to_replace
			? currentSchedule?.teach_by[0].value
			: teachers[0]?.value,
		class_id: currentSchedule?.class_id,
		reason: "",
	});

	const onChangeCurrentStep = () => {
		if (!discipline?.value || !(teachers?.length > 0)) {
			setCurrentStep((step) => step + 1);
		}

		setCurrentStep((step) => step + 1);
	};

	const onChangeValues = (key, value) => {
		setFormData((data) => {
			return {
				...data,
				[key]: value,
			};
		});
	};

	const onFinish = () => {
		setIsVisible(false);
		setCurrentStep(0);
	};

	const onSubmitAlert = async () => {
		onFinish();

		try {
			const response = await api.post("alerts/", formData);
			Alert.alert(
				"Suceso",
				"Você criou um alerta e ele pode ser visto pelos funcionários da COADES"
			);
		} catch (err) {
			Alert.alert("Erro", "Ocorreu algum problema ao tentar criar um alerta");
		}
	};

	const steps = [
		{
			description:
				"Esta funcionalidade só deve ser usada em casos onde o professor não compareceu a aula e, aparentemente, não ministrará aula. Desta forma, poderá ser utilizado para informar a equipe da COADES. Utilize apenas quando necessário e tiver certeza que não haverá professores ministrando aula no momento em que deveria ocorrer.",
			children: (
				<>
					<Button
						onPress={() => onChangeCurrentStep()}
						name={"Entendi, continuar"}
					/>

					<Button
						type="secondary"
						onPress={() => setIsVisible(false)}
						name={"Cancelar"}
					/>
				</>
			),
		},
		{
			description: "",
			children: (
				<>
					<Select
						label={"Disciplina"}
						disabled
						onChange={(value) => onChangeValues("discipline_id", value)}
						options={discipline?.value ? [discipline] : []}
					/>

					<Select
						label={"Professor(a)"}
						disabled={teachers?.length === 1}
						onChange={(value) => onChangeValues("teacher_id", value)}
						options={teachers}
					/>
					<Input
						label="Observações"
						placeholder="Escreva detalhes aqui (opcional)"
						type="text"
						multiline
						onChangeText={(text) => onChangeValues("reason", text)}
						contentStyle={styles.inputSize}
					/>
					<Button onPress={() => onSubmitAlert()} name={"Criar alerta"} />
				</>
			),
		},
		{
			description:
				"Não há aulas no momento. Você só pode emitir um alerta dentro de um período que a aula está ocorrendo.",
			children: (
				<>
					<Button onPress={() => onFinish()} name={"Fechar"} />
				</>
			),
		},
	];

	return (
		<Modal
			title={"Emitir alerta para COADES"}
			description={
				!currentSchedule ? steps[2].description : steps[currentStep].description
			}
			isVisible={isVisible}
			setIsVisible={setIsVisible}
		>
			{!currentSchedule ? steps[2].children : steps[currentStep].children}
		</Modal>
	);
};

export default AlertEmissionModal;
