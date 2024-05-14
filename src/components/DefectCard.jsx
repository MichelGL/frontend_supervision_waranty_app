import { Card } from "antd";
import { Button,  Flex } from 'antd';
import { PaperClipIcon } from '@heroicons/react/20/solid'
// eslint-disable-next-line no-unused-vars
import React from "react";

function DefectCard() {
    const defectId = "17"; // Пример номера нарушения
    const defectName = "Внутренняя отделка: Дверь"; // Пример наименования нарушения
    const defectDate = "17.04.2024"; // Пример даты нарушения
    const plannedDate = "12.06.2024";
    const actualDate = ""; // Для примера пока оставим пустую строку
    const contractorOrganization = "ООО DOOR";
    const responsiblePerson = "Муркин Василий Васильевич";
    const violationType = "Установка межкомнатных дверей";
    const constructionObjectName = "ЖК Дальше";
    const constructionObjectAddress = "ул. Ленина, 1";
    const location = "Подъезд 1, этаж 4, кв. 23";
    const description = "Сломана дверь, нарушены технологии установки";
    const responsibleKS = "Николаев Николай Николаевич";
    const isWarranty = true;
    const isRefusal = false;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: 30 }}>
            <Card
                title={
                    <div className="flex items-center gap-3">
                        <p className="text-2xl">{`Дефект №${defectId} от ${defectDate} "${defectName}"`}</p>
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
                            {/* Гарантийный случай */}
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Гарантийный случай</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{isWarranty ? 'Да' : 'Нет'}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Плановая дата устранения</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{plannedDate}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Фактическая дата устранения</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{actualDate}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Подрядная организация</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{contractorOrganization}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Ответственный представитель
                                    подрядной организации
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{responsiblePerson}</dd>
                            </div>
                            {/* Отказ подрядчика */}
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Отказ подрядчика</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{isRefusal ? 'Да' : 'Нет'}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Тип нарушения</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{violationType}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Название объекта строительства
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{constructionObjectName}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Адрес объекта строительства</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{constructionObjectAddress}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Место</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{location}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Описание</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Ответственный представитель
                                    УСК
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{responsibleKS}</dd>
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
                                                    <span className="truncate font-medium">Предписание.pdf</span>
                                                    <span className="flex-shrink-0 text-gray-400">12КБ</span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">Загрузить</a>
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
                    <Button danger>Удалить</Button>
                    <Button type="primary">Создать задачу</Button>
                    <Button type="link">К списку задач</Button>
                </Flex>

            </Card>
        </div>
    )
}

export default DefectCard