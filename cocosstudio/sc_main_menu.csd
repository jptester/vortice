<GameFile>
  <PropertyGroup Name="sc_main_menu" Type="Scene" ID="599c36d7-a863-4edc-89e6-bee8ea718001" Version="2.3.3.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="main_animation">
        <Timeline ActionTag="-562035896" Property="Position">
          <PointFrame FrameIndex="0" X="760.0000" Y="459.9999">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="650.0000" Y="460.2749">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-562035896" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-562035896" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-562035896" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="-2101250236" Property="Position">
          <PointFrame FrameIndex="0" X="760.0000" Y="237.0554">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="650.0000" Y="237.0554">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-2101250236" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-2101250236" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-2101250236" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="2030410930" Property="Position">
          <PointFrame FrameIndex="0" X="180.9977" Y="320.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="320.0000" Y="320.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="2030410930" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="2030410930" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="2030410930" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="main_animation" StartIndex="0" EndIndex="60">
          <RenderColor A="150" R="255" G="248" B="220" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Scene" Tag="5" ctype="GameNodeObjectData">
        <Size X="960.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="Image_3" CanEdit="False" ActionTag="-1679075526" Tag="10" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Width="2000" Scale9Height="1125" ctype="ImageViewObjectData">
            <Size X="960.0000" Y="640.0000" />
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="visualcontent/backgrounds/bg1.jpg" Plist="" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_init" ActionTag="-562035896" Alpha="0" CallBackType="Click" Tag="7" IconVisible="False" LeftMargin="592.0000" RightMargin="32.0000" TopMargin="80.5001" BottomMargin="360.4999" TouchEnable="True" FontSize="48" ButtonText="Inicio" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="306" Scale9Height="177" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="336.0000" Y="199.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="760.0000" Y="459.9999" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.7917" Y="0.7187" />
            <PreSize X="0.3500" Y="0.3109" />
            <TextColor A="255" R="255" G="255" B="255" />
            <DisabledFileData Type="Normal" Path="visualcontent/ui/button3_disabled.png" Plist="" />
            <PressedFileData Type="Normal" Path="visualcontent/ui/button3_pressed.png" Plist="" />
            <NormalFileData Type="Normal" Path="visualcontent/ui/button3.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_quit" ActionTag="-2101250236" Alpha="0" CallBackType="Click" Tag="8" IconVisible="False" LeftMargin="592.0000" RightMargin="32.0000" TopMargin="303.4446" BottomMargin="137.5554" TouchEnable="True" FontSize="48" ButtonText="Salir" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="306" Scale9Height="177" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="336.0000" Y="199.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="760.0000" Y="237.0554" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.7917" Y="0.3704" />
            <PreSize X="0.3500" Y="0.3109" />
            <TextColor A="255" R="255" G="255" B="255" />
            <DisabledFileData Type="Normal" Path="visualcontent/ui/button3_disabled.png" Plist="" />
            <PressedFileData Type="Normal" Path="visualcontent/ui/button3_pressed.png" Plist="" />
            <NormalFileData Type="Normal" Path="visualcontent/ui/button3.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="Image_2" ActionTag="2030410930" Alpha="0" Tag="9" IconVisible="False" LeftMargin="43.9977" RightMargin="642.0023" TopMargin="11.5000" BottomMargin="11.5000" Scale9Width="274" Scale9Height="617" ctype="ImageViewObjectData">
            <Size X="274.0000" Y="617.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="180.9977" Y="320.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.1885" Y="0.5000" />
            <PreSize X="0.2854" Y="0.9641" />
            <FileData Type="Normal" Path="visualcontent/comic_characters/samantha01.png" Plist="" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>