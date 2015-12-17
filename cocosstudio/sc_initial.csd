<GameFile>
  <PropertyGroup Name="sc_initial" Type="Scene" ID="ca0faeba-9be5-487b-bfe1-d0fdf368f936" Version="2.3.3.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="240" Speed="1.0000" ActivedAnimationName="main_animation">
        <Timeline ActionTag="1872433693" Property="Position">
          <PointFrame FrameIndex="0" X="480.0000" Y="320.0000">
            <EasingData Type="2" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="480.0000" Y="320.0000">
            <EasingData Type="1" />
          </PointFrame>
          <PointFrame FrameIndex="120" X="480.0000" Y="320.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="1872433693" Property="Scale">
          <ScaleFrame FrameIndex="0" X="2.0000" Y="2.0000">
            <EasingData Type="2" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="2.0000" Y="2.0000">
            <EasingData Type="1" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="2.0000" Y="2.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1872433693" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="2" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000">
            <EasingData Type="1" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1872433693" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="2" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="1" />
          </IntFrame>
          <IntFrame FrameIndex="120" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="-562744561" Property="Position">
          <PointFrame FrameIndex="240" X="480.0000" Y="320.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-562744561" Property="Scale">
          <ScaleFrame FrameIndex="240" X="0.5000" Y="0.5000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-562744561" Property="RotationSkew">
          <ScaleFrame FrameIndex="240" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-562744561" Property="Alpha">
          <IntFrame FrameIndex="120" Value="0">
            <EasingData Type="4" />
          </IntFrame>
          <IntFrame FrameIndex="180" Value="255">
            <EasingData Type="1" />
          </IntFrame>
          <IntFrame FrameIndex="240" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="main_animation" StartIndex="0" EndIndex="240">
          <RenderColor A="150" R="240" G="230" B="140" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Scene" Tag="3" ctype="GameNodeObjectData">
        <Size X="960.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="Image_1" ActionTag="665371363" Tag="4" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Width="1" Scale9Height="1" ctype="ImageViewObjectData">
            <Size X="960.0000" Y="640.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="320.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="visualcontent/various/whitedot.png" Plist="" />
          </AbstractNodeData>
          <AbstractNodeData Name="el_splashscreen_1" ActionTag="1872433693" Alpha="0" Tag="5" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="398.5000" RightMargin="398.5000" TopMargin="253.0000" BottomMargin="253.0000" ctype="SpriteObjectData">
            <Size X="163.0000" Y="134.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="320.0000" />
            <Scale ScaleX="2.0000" ScaleY="2.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.1698" Y="0.2094" />
            <FileData Type="Normal" Path="visualcontent/brands/el_splashscreen.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="cocos_splashscreen_2" ActionTag="-562744561" Alpha="0" Tag="6" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-420.0000" RightMargin="-420.0000" TopMargin="84.0000" BottomMargin="84.0000" ctype="SpriteObjectData">
            <Size X="1800.0000" Y="472.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="320.0000" />
            <Scale ScaleX="0.5000" ScaleY="0.5000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.8750" Y="0.7375" />
            <FileData Type="Normal" Path="visualcontent/brands/cocos_splashscreen.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>