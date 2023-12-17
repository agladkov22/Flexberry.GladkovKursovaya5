export default {
  projections: {
    ТчТехКартыE: {
      заявки: {
        __caption__: 'Заявки',
        наименДетали: {
          __caption__: 'Наимен детали'
        }
      },
      чертежи: {
        __caption__: 'Чертежи',
        номерЧертежа: {
          __caption__: 'Номер чертежа'
        },
        заявки: {
          __caption__: '',
          материалы: {
            __caption__: '',
            наименование: {
              __caption__: 'Материал'
            }
          }
        }
      },
      оборудование: {
        __caption__: 'Оборудование',
        наименование: {
          __caption__: 'Наименование'
        }
      }
    }
  },
  validations: {
    заявки: {
      __caption__: 'Заявки'
    },
    оборудование: {
      __caption__: 'Оборудование'
    },
    чертежи: {
      __caption__: 'Чертежи'
    },
    техКарты: {
      __caption__: 'техКарты'
    }
  }
};
