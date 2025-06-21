import React, {useState} from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {components} from '../components';

export const Filter: React.FC = () => {
  const {navigate} = hooks.useRouter();

  const bikeTypes = [
    'Road Bikes',
    'Electric Bikes',
    'Hybrid Bikes',
    'Mountain Bikes',
    'Specialty Bikes',
  ];

  const suspensionTypes = [
    'No Suspension',
    'Front Suspension',
    'Full Suspension',
  ];

  const drivetrainOptions = [
    'Single-speed',
    'Electronic shifting',
    'Multiple gears',
  ];

  const tags = [
    {
      key: 'sale',
      label: 'SALE',
      color: '#66A97D',
      checked: true,
    },
    {
      key: 'new',
      label: 'NEW',
      color: '#FF7557',
      checked: false,
    },
    {
      key: 'top',
      label: 'TOP',
      color: '#FF6262',
      checked: false,
    },
  ];

  const colors = [
    {id: 1, code: '#FF6262', name: 'Pastel Red'},
    {id: 2, code: '#63C7FF', name: 'Maya Blue'},
    {id: 3, code: '#F8E7CD', name: 'Champagne'},
    {id: 4, code: '#161E2F', name: 'Eigengrau'},
    {id: 5, code: '#000000', name: 'Black'},
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBikeTypes, setSelectedBikeTypes] = useState<string[]>([]);
  const [selectedSuspensionTypes, setSelectedSuspensionTypes] = useState<
    string[]
  >([]);
  const [selectedDrivetrainOptions, setSelectedDrivetrainOptions] = useState<
    string[]
  >([]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };
  const handleBikeTypeChange = (type: string) => {
    setSelectedBikeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };
  const handleSuspensionTypeChange = (type: string) => {
    setSelectedSuspensionTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };
  const handleDrivetrainOptionChange = (option: string) => {
    setSelectedDrivetrainOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  };

  const renderHeader = () => {
    return <components.Header showGoBack={true} title="Filter" />;
  };

  const renderTags = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
          }}
        >
          {tags.map((tag) => {
            return (
              <li>
                <button
                  style={{display: 'flex', alignItems: 'center', gap: 8}}
                  onClick={() => handleTagChange(tag.key)}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: '1px solid #EEEEEE',
                      backgroundColor: 'var(--white-color)',
                      borderRadius: 5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {selectedTags.includes(tag.key) && <svg.CheckElementSvg />}
                  </div>
                  <div
                    style={{
                      backgroundColor: tag.color,
                      height: 18,
                      paddingLeft: 6,
                      paddingRight: 6,
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: 6,
                    }}
                  >
                    <span
                      className="t10"
                      style={{
                        color: 'var(--white-color)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                      }}
                    >
                      {tag.label}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderColors = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Color</h5>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 14,
          }}
        >
          {colors.map((color) => {
            return (
              <li>
                <button
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: color.code,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleColorChange(color.code)}
                >
                  {selectedColors.includes(color.code) && <svg.ColorCheckSvg />}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderBikeTypes = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Bike Type</h5>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          {bikeTypes.map((type) => {
            return (
              <li>
                <button
                  style={{
                    height: 27,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: selectedBikeTypes.includes(type)
                      ? '1px solid var(--main-orange-color)'
                      : '1px solid #EEEEEE',
                    backgroundColor: selectedBikeTypes.includes(type)
                      ? 'var(--main-orange-color)'
                      : 'var(--white-color)',
                  }}
                  onClick={() => handleBikeTypeChange(type)}
                >
                  <span
                    className="t12"
                    style={{
                      fontWeight: 700,
                      color: selectedBikeTypes.includes(type)
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    }}
                  >
                    {type}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderSuspensionTypes = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Suspension Type</h5>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          {suspensionTypes.map((type) => {
            return (
              <li>
                <button
                  style={{
                    height: 27,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: selectedSuspensionTypes.includes(type)
                      ? '1px solid var(--main-orange-color)'
                      : '1px solid #EEEEEE',
                    backgroundColor: selectedSuspensionTypes.includes(type)
                      ? 'var(--main-orange-color)'
                      : 'var(--white-color)',
                  }}
                  onClick={() => handleSuspensionTypeChange(type)}
                >
                  <span
                    className="t12"
                    style={{
                      fontWeight: 700,
                      color: selectedSuspensionTypes.includes(type)
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    }}
                  >
                    {type}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderDrivetrainOptions = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20}}>
        <h5 style={{marginBottom: 14}}>Drivetrain</h5>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          {drivetrainOptions.map((type) => {
            return (
              <li>
                <button
                  style={{
                    height: 27,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: selectedDrivetrainOptions.includes(type)
                      ? '1px solid var(--main-orange-color)'
                      : '1px solid #EEEEEE',
                    backgroundColor: selectedDrivetrainOptions.includes(type)
                      ? 'var(--main-orange-color)'
                      : 'var(--white-color)',
                  }}
                  onClick={() => handleDrivetrainOptionChange(type)}
                >
                  <span
                    className="t12"
                    style={{
                      fontWeight: 700,
                      color: selectedDrivetrainOptions.includes(type)
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    }}
                  >
                    {type}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderButton = () => {
    return (
      <section
        style={{
          padding: 20,
          position: 'fixed',
          width: '100%',
          bottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <components.Button
          title="apply filters"
          onClick={() => {
            navigate(-1);
          }}
        />
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 30px)',
          paddingBottom: 110,
        }}
      >
        {renderTags()}
        {renderColors()}
        {renderBikeTypes()}
        {renderSuspensionTypes()}
        {renderDrivetrainOptions()}
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderButton()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
