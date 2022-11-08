import { useState, useEffect } from "react";

const useTimer = ({ hour = 0, minute = 0, second = 0 }) => {
	const [timer, setTimer] = useState({
		hour: hour,
		minute: minute,
		second: second,
	});

	useEffect(() => {
		let timerInterval = setInterval(() => {
			if (timer.second === 0) {
				if (timer.minute === 0) {
					if (timer.hour === 0) {
						return;
					} else {
						setTimer({
							hour: timer.hour - 1,
							minute: 59,
							second: 59,
						});
					}
				} else {
					setTimer({
						...timer,
						minute: timer.minute - 1,
						second: 59,
					});
				}
			} else {
				setTimer({
					...timer,
					second: timer.second - 1,
				});
			}
		}, 1000);
		if (timer.hour === 0 && timer.minute === 0 && timer.second === 0) {
			clearInterval(timerInterval);
		}
		return () => clearInterval(timerInterval);
	}, [timer]);

	return timer;
};

export default useTimer;
