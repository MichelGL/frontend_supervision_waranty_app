import { Card } from "antd";
import { Button,  Flex } from 'antd';
import { PaperClipIcon } from '@heroicons/react/20/solid'
// eslint-disable-next-line no-unused-vars
import React from "react";

function ViolationCard() {
    const violationId = "123"; // Пример номера нарушения
    const violationName = "Складирование материалов, мусор"; // Пример наименования нарушения
    const violationDate = "13.04.2024"; // Пример даты нарушения
    return (
        <Card
            title={
                <div className="flex items-center gap-3">
                    <img src="/Status_AtWork_icon.png" alt="Иконка статуса в работе"/>
                    <p className="text-2xl">{`№ ${violationId} от ${violationDate} "${violationName}"`}</p>
                </div>
            }
            extra={
                <span
                    className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    В работе
                </span>
            }
            style={{
                width: 1000,
            }}
        >
            <div className="mt-1 mr-4 flex justify-end">
                <Button type="link">Назад</Button>
                <Button type="link">На главную страницу</Button>
            </div>
            <div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Подрядная организация
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ООО ПостроимСами
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Ответственный представитель подрядной организации
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Королев Сергей Павлович
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Тип нарушения</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Условия хранения
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Название объекта строительства</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ЖК Дальше</dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Адрес объекта строительства</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ул. Ленина, 1</dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Место</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">в осях1-4/А-Б
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Описание</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Складирование опалубки, поддонов и других материалов – навалом, нет проходов к зданию,
                                мусор не вывозится.
                                В ИТП, лифтовых шахтах постоянно стоит вода.
                                Имеются провалы грунта у ростверков.
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Ответственный представитель
                                УСК
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Николаев Николай
                                Николаевич
                            </dd>
                        </div>
                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Вложения</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                           aria-hidden="true"/>
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span
                                                    className="truncate font-medium">ФотоМусор.jpg</span>
                                                <span className="flex-shrink-0 text-gray-400">68КБ</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Загрузить
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                           aria-hidden="true"/>
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span
                                                    className="truncate font-medium">ФотоВход2.jpg</span>
                                                <span className="flex-shrink-0 text-gray-400">98КБ</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Загрузить
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Flex gap="small" wrap>
                <Button>Редактировать</Button>
                <Button type="primary">Создать задачу</Button>
                <Button type="link">К списку задач</Button>
            </Flex>

        </Card>
    )
}

export default ViolationCard